using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Actions
{
    public class ItemOfListAct
    {
        static PartyTeamEntities db = new PartyTeamEntities();
        public static List<ItemOfList> Get()
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.ItemOfList.ToList();
            }
        }
        public static ItemOfList GetItemOfListById(int id)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                return db.ItemOfList.FirstOrDefault(x => x.Id == id);
            }
        }
        public static ItemOfList Post(ItemOfList itemOfList)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                db.ItemOfList.Add(itemOfList);
                db.SaveChanges();
                return itemOfList;
            }
        }
        public static ItemOfList Put(ItemOfList ItemOfList)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                ItemOfList newItemOfList = db.ItemOfList.FirstOrDefault(x => x.Id == ItemOfList.Id);
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
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                ItemOfList iol = db.ItemOfList.FirstOrDefault(ca => ca.Id == i);
                db.ItemOfList.Remove(iol);
                db.SaveChanges();
            }
        }

        public static void DeleteAllList(int i)
        {
            using (PartyTeamEntities db = new PartyTeamEntities())
            {
                ItemOfList iol = db.ItemOfList.FirstOrDefault(ca => ca.Id == i);
                db.ItemOfList.Remove(iol);
                db.SaveChanges();
            }
        }
    }
}
