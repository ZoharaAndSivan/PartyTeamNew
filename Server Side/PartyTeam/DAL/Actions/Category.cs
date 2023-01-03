using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;



namespace DAL.Actions
{
    public class Category
    {
        public static List<category> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.category.Include(c => c.typeevent).ToList();
            }
        }
        public static category GetCategoryById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.category.FirstOrDefault(x => x.Id == id);
            }
        }
        public static category Post(category category)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                category = db.category.Add(category);
                db.SaveChanges();
                return category;
            }
        }
        public static category Put(category category)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                category newCategory = db.category.FirstOrDefault(x => x.Id == category.Id);
                newCategory.Name = category.Name;
                newCategory.TypeId = category.TypeId;
                newCategory.typeevent = category.typeevent;
                db.SaveChanges();
                return newCategory;
            }
        }
        public static void Delete(int i)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                category c = db.category.FirstOrDefault(ca => ca.Id == i);
                db.category.Remove(c);
                db.SaveChanges();
            }
        }
    }
}
