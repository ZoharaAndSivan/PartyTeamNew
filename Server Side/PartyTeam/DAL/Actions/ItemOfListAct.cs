using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class ItemOfListAct
    {
        static masterEntities db = new masterEntities();
        public static List<ItemOfList> Get()
        {
            using (masterEntities db = new masterEntities())
            {
                return db.ItemOfLists.ToList();
            }
        }
        public static ItemOfList GetItemOfListById(int id)
        {
            using (masterEntities db = new masterEntities())
            {
                return db.ItemOfLists.FirstOrDefault(x => x.Id == id);
            }
        }
        public static ItemOfList Post(ItemOfList itemOfList)
        {
            using (masterEntities db = new masterEntities())
            {
                db.ItemOfLists.Add(itemOfList);
                db.SaveChanges();
                return itemOfList;
            }
        }
        public static ItemOfList Put(ItemOfList ItemOfList)
        {
            using (masterEntities db = new masterEntities())
            {
                ItemOfList newItemOfList = db.ItemOfLists.FirstOrDefault(x => x.Id == ItemOfList.Id);
                newItemOfList.Name = ItemOfList.Name;
                newItemOfList.KindId = ItemOfList.KindId;
                newItemOfList.Price = ItemOfList.Price;
                newItemOfList.AmountOfPerson = ItemOfList.AmountOfPerson;
                newItemOfList.typeevent = ItemOfList.typeevent;
                db.SaveChanges();
                return newItemOfList;
            }
        }
        public static void Delete(int i)
        {
            using (masterEntities db = new masterEntities())
            {
                ItemOfList iol = db.ItemOfLists.FirstOrDefault(ca => ca.Id == i);
                db.ItemOfLists.Remove(iol);
                db.SaveChanges();
            }
        }

        public static void DeleteAllList(int i)
        {
            using (masterEntities db = new masterEntities())
            {
                ItemOfList iol = db.ItemOfLists.FirstOrDefault(ca => ca.Id == i);
                db.ItemOfLists.Remove(iol);
                db.SaveChanges();
            }
        }
    }
}
