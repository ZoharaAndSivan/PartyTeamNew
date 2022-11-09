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
    public class ItemToEventManager
    {
        public static List<itemtoeventDTO> GetItems()
        {
            List<itemtoevent> list = ItemToEvent.Get();
            return itemtoeventDTO.CreateDTOList(list);
        }
        public static List<itemtoeventDTO> GetItemToEventByIdEvent(int id)
        {
            List<itemtoevent> list = ItemToEvent.Get().Where(c => c.CelebrationId == id).ToList();
            List<itemtoevent> itemtoevents = list;
            return itemtoeventDTO.CreateDTOList(itemtoevents);
            // return itemtoeventDTOs;
        }
        public static void PostItem(itemtoevent i)
        {
            itemtoevent itemtoevent = ItemToEvent.Post(i);
        }
        public static void PutITE(itemtoevent ite)
        {
            ItemToEvent.Put(ite);
        }
        public static void Delete(int i)
        {
            ItemToEvent.Delete(i);
        }
    }
}
