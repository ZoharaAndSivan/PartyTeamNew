using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
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
        public static void ConfirmArrival(string email, bool answer)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                db.customerofevent.FirstOrDefault(x => x.Email == email).Status = answer;
                db.SaveChanges();
                //SendEmailToUser("אישרת הגעה לאירוע", "", email);
                db.customerofevent.FirstOrDefault(x => x.Email == email);
            }
        }
        public static bool SendEmailToUser(string subject, string body, string emailAddress)
        {

            using (MailMessage mail = new MailMessage())
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine();
                sb.Append(body).AppendLine();
                sb.AppendLine();
                try
                {
                    SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");


                    mail.From = new MailAddress("zoharasivan@gmail.com");
                    mail.To.Add(emailAddress);
                    mail.Subject = subject;
                    string bodyStr = sb.ToString();
                    mail.Body = bodyStr;


                    SmtpServer.Port = 587;
                    SmtpServer.Credentials = new System.Net.NetworkCredential("zoharasivan@gmail.com", "zoharaandsivan");
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
