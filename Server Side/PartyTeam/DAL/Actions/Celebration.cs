using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class Celebration
    {
        static masterEntities db = new masterEntities();
        public static List<celebration> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.celebrations.ToList();
            }
        }
        public static celebration GetCelebrationById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.celebrations.FirstOrDefault(x => x.Id == id);
            }
        }
        public static celebration Post(celebration celebration)
        {
            using (masterEntities db = new masterEntities())
            {
                celebration = db.celebrations.Add(celebration);
                db.SaveChanges();
                return celebration;
            }
        }
        public static celebration Put(celebration celebration)
        {
            using (masterEntities db = new masterEntities())
            {
                celebration newCelebration = db.celebrations.FirstOrDefault(x => x.Id == celebration.Id);
                newCelebration.Name = celebration.Name;
                newCelebration.DateCelebration = celebration.DateCelebration;
                newCelebration.EncodedCelebration = celebration.EncodedCelebration;
                newCelebration.ImportantText = celebration.ImportantText;
                newCelebration.InEditingCelebration = celebration.InEditingCelebration;
                newCelebration.itemtoevents = celebration.itemtoevents;
                newCelebration.Lenght = celebration.Lenght;
                newCelebration.noteevents = celebration.noteevents;
                newCelebration.PepoleAmount = celebration.PepoleAmount;
                newCelebration.StartHour = celebration.StartHour;
                newCelebration.CelebrationType = celebration.CelebrationType;
                newCelebration.Address = celebration.Address;
                newCelebration.typeevent = celebration.typeevent;
                newCelebration.customerofevents = celebration.customerofevents;
                db.SaveChanges();
                return newCelebration;
            }
        }
        public static void Delete(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                celebration c = db.celebrations.FirstOrDefault(ca => ca.Id == id);
                db.celebrations.Remove(c);
                db.SaveChanges();
            }
        }
    }
}
