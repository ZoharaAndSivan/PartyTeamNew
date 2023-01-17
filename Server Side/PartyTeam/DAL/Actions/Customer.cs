using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
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
                SendEmailToUser("הרשמה לאתר partyteam", "נרשמת בהצלחה לאתר PartyTeam. סיסממא {1}.{0} פרטי ההתחברות שלך הם:שם משתמש:", customer.Email);
                return customer;
            }
        }
        public static bool SendEmailToUser(string subject, string body, string emailAddress)
        {

            MailMessage mail = new MailMessage();

            StringBuilder sb = new StringBuilder();
            sb.AppendLine();
            sb.Append(body).AppendLine();
            sb.AppendLine();
            try
            {
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("zoharasivan@gmail.com");
                mail.To.Add(new MailAddress(emailAddress));
                mail.Subject = subject;
                string bodyStr = sb.ToString();
                mail.Body = bodyStr;
                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("zoharasivan@gmail.com", "SIVANZORI123");
                SmtpServer.EnableSsl = true;
                SmtpServer.Send(mail);
                return true;
            }
            catch (Exception ex)
            {
                string str = ex.Message;
                return false;
            }

        }
        public static customer Put(customer customer)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                customer newCustomer = db.customer.FirstOrDefault(x => x.Id == customer.Id);
                newCustomer.Name = customer.Name;
                newCustomer.Approve = customer.Approve;
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