using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class TypeEvent
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<typeevent> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.typeevent.ToList();
            }
        }
        public static typeevent GetTypeById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.typeevent.FirstOrDefault(x => x.Id == id);
            }
        }
        public static typeevent Post(typeevent typeevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                typeevent = db.typeevent.Add(typeevent);
                db.SaveChanges();
                return typeevent;
            }
        }
        public static typeevent Put(typeevent typeevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                typeevent newtypeevent = db.typeevent.FirstOrDefault(x => x.Id == typeevent.Id);
                newtypeevent.category = typeevent.category;
                newtypeevent.celebration = typeevent.celebration;
                newtypeevent.Describe = typeevent.Describe;
                newtypeevent.Name = typeevent.Name;
                newtypeevent.Status = typeevent.Status;
                db.SaveChanges();
                return newtypeevent;
            }
        }
        public static void Delete(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                typeevent te = db.typeevent.FirstOrDefault(ca => ca.Id == id);
                db.typeevent.Remove(te);
                db.SaveChanges();
            }
        }
    }
}