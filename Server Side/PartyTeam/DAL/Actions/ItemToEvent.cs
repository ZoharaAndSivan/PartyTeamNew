using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class ItemToEvent
    {
        static masterEntities db = new masterEntities();
        public static List<itemtoevent> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.itemtoevents.ToList();
            }
        }
        public static itemtoevent GetItemById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.itemtoevents.FirstOrDefault(x => x.Id == id);
            }
        }
        public static itemtoevent Post(itemtoevent itemtoevent)
        {
            using (masterEntities db = new masterEntities())
            {
                itemtoevent = db.itemtoevents.Add(itemtoevent);
                db.SaveChanges();
                return itemtoevent;
            }
        }
        public static itemtoevent Put(itemtoevent itemtoevent)
        {
            using (masterEntities db = new masterEntities())
            {
                itemtoevent newItemtoevent = db.itemtoevents.FirstOrDefault(x => x.Id == itemtoevent.Id);
                newItemtoevent.CelebrationId = itemtoevent.CelebrationId;
                newItemtoevent.Amount = itemtoevent.Amount;
                newItemtoevent.celebration = itemtoevent.celebration;
                newItemtoevent.CustomerId = itemtoevent.CustomerId;
                newItemtoevent.Describe = itemtoevent.Describe;
                newItemtoevent.Name = itemtoevent.Name;
                newItemtoevent.Price = itemtoevent.Price;
                newItemtoevent.ToBeTaken = itemtoevent.ToBeTaken;
                newItemtoevent.ToEveryone = itemtoevent.ToEveryone;
                db.SaveChanges();
                return newItemtoevent;
            }
        }
        public static void Delete(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                itemtoevent ite = db.itemtoevents.FirstOrDefault(ca => ca.Id == id);
                db.itemtoevents.Remove(ite);
                db.SaveChanges();
            }
        }
    }
}