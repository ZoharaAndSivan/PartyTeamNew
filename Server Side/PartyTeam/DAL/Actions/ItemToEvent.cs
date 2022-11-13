using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class ItemToEvent
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<itemtoevent> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.itemtoevent.ToList();
            }
        }
        public static itemtoevent GetItemById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.itemtoevent.FirstOrDefault(x => x.Id == id);
            }
        }
        public static itemtoevent Post(itemtoevent itemtoevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                itemtoevent = db.itemtoevent.Add(itemtoevent);
                db.SaveChanges();
                return itemtoevent;
            }
        }
        public static itemtoevent Put(itemtoevent itemtoevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                itemtoevent newItemtoevent = db.itemtoevent.FirstOrDefault(x => x.Id == itemtoevent.Id);
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
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                itemtoevent ite = db.itemtoevent.FirstOrDefault(ca => ca.Id == id);
                db.itemtoevent.Remove(ite);
                db.SaveChanges();
            }
        }
    }
}