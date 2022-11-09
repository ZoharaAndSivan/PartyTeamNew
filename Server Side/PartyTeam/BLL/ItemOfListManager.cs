using DAL;
using DAL.Actions;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class ItemOfListManager
    {
        public static List<itemoflistDTO> GetItemOfList()
        {
            List<ItemOfList> list = ItemOfListAct.Get();
            return itemoflistDTO.CreateDTOList(list);
        }
        public static List<itemoflistDTO> GetItemOfListById(int id)
        {
            List<ItemOfList> list = ItemOfListAct.Get();
            List<ItemOfList> ItemOfLists = list.Where(c => c.KindId == id).ToList();
            List<itemoflistDTO> itemoflistDTOs = itemoflistDTO.CreateDTOList(ItemOfLists);
            return itemoflistDTOs;
        }
        public static void PostItemOfList(ItemOfList c)
        {
            ItemOfListAct.Post(c);            
        }
        public static void PutIOL(ItemOfList ite)
        {
            ItemOfListAct.Put(ite);
        }
        public static void DeleteItem(int id)
        {
            ItemOfListAct.Delete(id);
        }
    }
}