using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class Category
    {
        static masterEntities db = new masterEntities();
        public static List<category> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.categories.ToList();
            }
        }
        public static category GetCategoryById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.categories.FirstOrDefault(x => x.Id == id);
            }
        }
        public static category Post(category category)
        {
            using (masterEntities db = new masterEntities())
            {
                category = db.categories.Add(category);
                db.SaveChanges();
                return category;
            }
        }
        public static category Put(category category)
        {
            using (masterEntities db = new masterEntities())
            {
                category newCategory = db.categories.FirstOrDefault(x => x.Id == category.Id);
                newCategory.Name = category.Name;
                newCategory.TypeId = category.TypeId;
                newCategory.typeevents = category.typeevents;
                db.SaveChanges();
                return newCategory;
            }
        }
        public static void Delete(int i)
        {
            using (masterEntities db = new masterEntities())
            {
                category c = db.categories.FirstOrDefault(ca => ca.Id == i);
                db.categories.Remove(c);
                db.SaveChanges();
            }
        }
    }
}
