using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class Customer
    {
        static masterEntities db = new masterEntities();
        public static List<customer> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.customers.ToList();
            }
        }
        public static customer GetCustomerById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.customers.FirstOrDefault(x => x.Id == id);

            }
        }
        public static customer Post(customer customer)
        {
            using (masterEntities db = new masterEntities())
            {
                db.customers.Add(customer);
                db.SaveChanges();
                return customer;
            }

        }
        public static customer Put(customer customer)
        {
            using (masterEntities db = new masterEntities())
            {
                customer newCustomer = db.customers.FirstOrDefault(x => x.Id == customer.Id);
                newCustomer.Name = customer.Name;
                newCustomer.Approve = customer.Approve;
                newCustomer.customerofevents = customer.customerofevents;
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
            using (masterEntities db = new masterEntities())
            {
                customer c = db.customers.FirstOrDefault(ca => ca.Id == id);
                db.customers.Remove(c);
                db.SaveChanges();
            }
        }
    }
}