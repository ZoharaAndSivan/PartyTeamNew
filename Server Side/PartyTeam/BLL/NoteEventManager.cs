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
    public class NoteEventManager
    {
        public static List<noteeventDTO> GetNotes()
        {
            List<noteevent> list = NoteEvent.Get();
            return noteeventDTO.CreateDTOList(list);
        }
        public static List<noteeventDTO> GetNoteEventById(int id)
        {
            List<noteevent> list = NoteEvent.Get();
            List<noteevent> noteevents = list.Where(c => c.Id == id).ToList();
            List<noteeventDTO> noteeventDTOs = noteeventDTO.CreateDTOList(noteevents);
            return noteeventDTOs;
        }
        public static void PostItem(noteevent i)
        {
            NoteEvent.Post(i);
        }
        public static void PutNE(noteevent ne)
        {
            NoteEvent.Put(ne);
        }
        public static void Delete(int i)
        {
            NoteEvent.Delete(i);
        }
    }
}
