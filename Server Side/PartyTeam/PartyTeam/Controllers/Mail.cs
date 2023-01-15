using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Web;

namespace PartyTeam.Controllers
{
    static class Mail
    {
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
                    mail.From = new MailAddress("your email address");
                    mail.To.Add(emailAddress);
                    mail.Subject = subject;
                    string bodyStr = sb.ToString();
                    mail.Body = bodyStr;


                    SmtpServer.Port = 587;
                    SmtpServer.Credentials = new System.Net.NetworkCredential("your email address", "password of you email address");
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
    }
}