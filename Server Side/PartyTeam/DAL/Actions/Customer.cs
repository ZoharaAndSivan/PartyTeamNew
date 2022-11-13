using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class Customer
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<customer> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.customer.ToList();
            }
        }
        public static customer GetCustomerById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.customer.FirstOrDefault(x => x.Id == id);

            }
        }
        public static customer Post(customer customer)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                db.customer.Add(customer);
                db.SaveChanges();
                return customer;
            }

        }
        public static customer Put(customer customer)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                customer newCustomer = db.customer.FirstOrDefault(x => x.Id == customer.Id);
                newCustomer.Name = customer.Name;
                newCustomer.Approve = customer.Approve;
                newCustomer.customerofevent = customer.customerofevent;
                newCustomer.Email = customer.Email;
                newCustomer.Image = customer.Image;
                newCustomer.Password = customer.Password;
                newCustomer.Phone = customer.Phone;
                newCustomer.Status = customer.Status;
                db.SaveChanges();
                return newCustomer;
            }
        }
        public static void Delete(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                customer c = db.customer.FirstOrDefault(ca => ca.Id == id);
                db.customer.Remove(c);
                db.SaveChanges();
            }
        }
    }
}