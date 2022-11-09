using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class TypeEvent
    {
        static masterEntities db = new masterEntities();
        public static List<typeevent> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.typeevents.ToList();
            }
        }
        public static typeevent GetTypeById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.typeevents.FirstOrDefault(x => x.Id == id);
            }
        }
        public static typeevent Post(typeevent typeevent)
        {
            using (masterEntities db = new masterEntities())
            {
                typeevent = db.typeevents.Add(typeevent);
                db.SaveChanges();
                return typeevent;
            }
        }
        public static typeevent Put(typeevent typeevent)
        {
            using (masterEntities db = new masterEntities())
            {
                typeevent newTypeevents = db.typeevents.FirstOrDefault(x => x.Id == typeevent.Id);
                newTypeevents.category = typeevent.category;
                newTypeevents.celebrations = typeevent.celebrations;
                newTypeevents.Describe = typeevent.Describe;
                newTypeevents.Name = typeevent.Name;
                newTypeevents.Status = typeevent.Status;
                db.SaveChanges();
                return newTypeevents;
            }
        }
        public static void Delete(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                typeevent te = db.typeevents.FirstOrDefault(ca => ca.Id == id);
                db.typeevents.Remove(te);
                db.SaveChanges();
            }
        }
    }
}