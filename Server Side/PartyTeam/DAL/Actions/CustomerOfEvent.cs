using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class CustomerOfEvent
    {
        static masterEntities db = new masterEntities();
        public static List<customerofevent> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.customerofevents.ToList();
            }
        }
        public static customerofevent GetCustomerById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.customerofevents.FirstOrDefault(x => x.Id == id);
            }
        }
        public static customerofevent Post(customerofevent customerofevent)
        {
            using (masterEntities db = new masterEntities())
            {
                customerofevent = db.customerofevents.Add(customerofevent);
                db.SaveChanges();
                return customerofevent;
            }
        }
        public static customerofevent Put(customerofevent customerofevent)
        {
            using (masterEntities db = new masterEntities())
            {
                customerofevent newCustomerofevent = db.customerofevents.FirstOrDefault(x => x.Id == customerofevent.Id);
                newCustomerofevent.CelebrationId = customerofevent.CelebrationId;
                newCustomerofevent.customer = customerofevent.customer;
                newCustomerofevent.CustomerId = customerofevent.CustomerId;
                newCustomerofevent.Status = customerofevent.Status;
                db.SaveChanges();
                return newCustomerofevent;
            }
        }
        public static void Delete(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                customerofevent coe = db.customerofevents.FirstOrDefault(ca => ca.Id == id);
                db.customerofevents.Remove(coe);
                db.SaveChanges();
            }
        }
    }
}
