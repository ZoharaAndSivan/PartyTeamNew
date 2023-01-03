using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class CustomerOfEvent
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<customerofevent> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.customerofevent.ToList();
            }
        }
        public static customerofevent GetCustomerById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.customerofevent.FirstOrDefault(x => x.Id == id);
            }
        }
        public static customerofevent Post(customerofevent customerofevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                customerofevent = db.customerofevent.Add(customerofevent);
                db.SaveChanges();
                return customerofevent;
            }
        }
        public static customerofevent Put(customerofevent customerofevent)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                customerofevent newCustomerofevent = db.customerofevent.FirstOrDefault(x => x.Id == customerofevent.Id);
                newCustomerofevent.Name = customerofevent.Name;
                newCustomerofevent.Email = customerofevent.Email;
                newCustomerofevent.Phone = customerofevent.Phone;
                newCustomerofevent.CelebrationId = customerofevent.CelebrationId;
                newCustomerofevent.Status = customerofevent.Status;
                db.SaveChanges();
                return newCustomerofevent;
            }
        }
        public static customerofevent ConfirmArrival(string email, bool answer)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                db.customerofevent.FirstOrDefault(x => x.Email == email).Status = answer;
                db.SaveChanges();
                return db.customerofevent.FirstOrDefault(x => x.Email == email);
            }
        }
        public static void Delete(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                customerofevent coe = db.customerofevent.FirstOrDefault(ca => ca.Id == id);
                db.customerofevent.Remove(coe);
                db.SaveChanges();
            }
        }
    }
}
