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
    public class TypeEventManager
    {
        public static List<typeeventDTO> Gettypes()
        {
            List<typeevent> list = TypeEvent.Get();
            return typeeventDTO.CreateDTOList(list);
        }
        public static List<typeeventDTO> GetTypeEventById(int id)
        {
            List<typeevent> list = TypeEvent.Get();
            List<typeevent> typeevents = list.Where(c => c.Id == id).ToList();
            List<typeeventDTO> typeeventDTOs = typeeventDTO.CreateDTOList(typeevents);
            return typeeventDTOs;
        }
        public static void PostType(typeevent i)
        {
            TypeEvent.Post(i);
        }
        public static void PutTE(typeevent te)
        {
            TypeEvent.Put(te);
        }
        public static void Delete(int i)
        {
            TypeEvent.Delete(i);
        }
    }
}
