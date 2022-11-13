using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class NoteEvent
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<noteevent> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.noteevent.ToList();
            }
        }
        public static noteevent GetNoteById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.noteevent.FirstOrDefault(x => x.Id == id);
            }
        }
        public static noteevent Post(noteevent noteevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                noteevent = db.noteevent.Add(noteevent);
                db.SaveChanges();
                return noteevent;
            }
        }
        public static noteevent Put(noteevent noteevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                noteevent newNoteevent = db.noteevent.FirstOrDefault(x => x.Id == noteevent.Id);
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
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                noteevent ne = db.noteevent.FirstOrDefault(ca => ca.Id == id);
                db.noteevent.Remove(ne);
                db.SaveChanges();
            }
        }
    }
}