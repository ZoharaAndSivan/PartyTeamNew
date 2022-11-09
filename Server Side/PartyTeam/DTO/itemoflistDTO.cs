using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class itemoflistDTO
    {
        public int Id { get; set; }
        public int KindId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int AmountOfPerson { get; set; }

        public virtual typeevent typeevent { get; set; }

        public itemoflistDTO()
        {

        }
        public itemoflistDTO(ItemOfList iol)
        {
            Id = iol.Id;
            KindId = (int)iol.KindId;
            Name = iol.Name;
            Price = (double)iol.Price;
            AmountOfPerson = (int)iol.AmountOfPerson;
        }
        public ItemOfList FromDTOToTable()
        {
            ItemOfList iol = new ItemOfList();
            iol.Id = Id;
            iol.KindId = KindId;
            iol.Name = Name;
            iol.Price = Price;
            iol.AmountOfPerson = AmountOfPerson;
            return iol;
        }
        public static List<itemoflistDTO> CreateDTOList(List<ItemOfList> list)
        {
            List<itemoflistDTO> DTOList = new List<itemoflistDTO>();
            return list.Select(iol => new itemoflistDTO(iol)).ToList();
        }
    }
}
