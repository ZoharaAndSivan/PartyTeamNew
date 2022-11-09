using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class NoteEvent
    {
        static masterEntities db = new masterEntities();
        public static List<noteevent> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.noteevents.ToList();
            }
        }
        public static noteevent GetNoteById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.noteevents.FirstOrDefault(x => x.Id == id);
            }
        }
        public static noteevent Post(noteevent noteevent)
        {
            using (masterEntities db = new masterEntities())
            {
                noteevent = db.noteevents.Add(noteevent);
                db.SaveChanges();
                return noteevent;
            }
        }
        public static noteevent Put(noteevent noteevent)
        {
            using (masterEntities db = new masterEntities())
            {
                noteevent newNoteevent = db.noteevents.FirstOrDefault(x => x.Id == noteevent.Id);
                newNoteevent.CelebrationId = noteevent.CelebrationId;
                newNoteevent.celebration = noteevent.celebration;
                newNoteevent.Note = noteevent.Note;
                newNoteevent.ToShow = noteevent.ToShow;
                db.SaveChanges();
                return newNoteevent;
            }
        }
        public static void Delete(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                noteevent ne = db.noteevents.FirstOrDefault(ca => ca.Id == id);
                db.noteevents.Remove(ne);
                db.SaveChanges();
            }
        }
    }
}