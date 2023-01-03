using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;


namespace DAL.Actions
{
    public class Celebration
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<celebration> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.celebration.Include(cel=>cel.customer).ToList();
            }
        }

        public static List<celebration> GetMyCelebrationByUserId(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.celebration.Include(cel => cel.customer).Where(cel=>cel.EventManager == id ).ToList();
            }
        }
        public static List<celebration> GetOrderCelebrationByUserEmail(string email)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.celebration.Include(cel => cel.customer).Where(cel=>cel.customerofevent.Any(coe=>coe.Email==email)).ToList();
            }
        }
        public static celebration GetCelebrationById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.celebration.FirstOrDefault(x => x.Id == id);
            }
        }
        public static celebration Post(celebration celebration)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                celebration = db.celebration.Add(celebration);
                db.SaveChanges();
                return celebration;
            }
        }
        public static celebration ChangeEventStatus(int id, bool answer)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                db.celebration.FirstOrDefault(x => x.Id == id).EncodedCelebration = answer;
                db.SaveChanges();
                return db.celebration.FirstOrDefault(x => x.Id == id);
            }
        }

        public static celebration Put(celebration celebration)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                celebration newCelebration = db.celebration.FirstOrDefault(x => x.Id == celebration.Id);
                newCelebration.Name = celebration.Name;
                newCelebration.DateCelebration = celebration.DateCelebration;
                newCelebration.EncodedCelebration = celebration.EncodedCelebration;
                newCelebration.ImportantText = celebration.ImportantText;
                newCelebration.noteevent = celebration.noteevent;
                newCelebration.PepoleAmount = celebration.PepoleAmount;
                newCelebration.StartHour = celebration.StartHour;
                newCelebration.CelebrationType = celebration.CelebrationType;
                newCelebration.Address = celebration.Address;
                newCelebration.typeevent = celebration.typeevent;
                newCelebration.customerofevent = celebration.customerofevent;
                db.SaveChanges();
                return newCelebration;
            }
        }
        public static void Delete(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                celebration c = db.celebration.FirstOrDefault(ca => ca.Id == id);
                db.celebration.Remove(c);
                db.SaveChanges();
            }
        }
    }
}
