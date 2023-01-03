using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class About
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<about> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.about.ToList();
            }
        }        
        public static about Put(about about)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                about newAbout = db.about.FirstOrDefault(x => x.Id == about.Id);
                newAbout.Information = about.Information;
                db.SaveChanges();
                return newAbout;
            }
        }
        public static void Delete(int i)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                about c = db.about.FirstOrDefault(a => a.Id == i);
                db.about.Remove(c);
                db.SaveChanges();
            }
        }
    }
}
