using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class itemtoeventDTO
    {
        public int Id { get; set; }
        public int CelebrationId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Describe { get; set; }
        public int Amount { get; set; }
        public int CustomerId { get; set; }
        public bool ToBeTaken { get; set; }
        public bool ToEveryone { get; set; }

        public virtual celebration celebration { get; set; }

        public itemtoeventDTO()
        {

        }
        public itemtoeventDTO(itemtoevent i)
        {
            Id = i.Id;
            CelebrationId = (int)i.CelebrationId;
            Name = i.Name;
            Price = (int)i.Price;
            Describe = i.Describe;
            Amount = (int)i.Amount;
            CustomerId = (int)i.CustomerId;
            ToBeTaken = (bool)i.ToBeTaken;
            ToEveryone = (bool)i.ToEveryone;

        }
        public itemtoevent FromDTOToTable()
        {
            itemtoevent i = new itemtoevent();
            i.Id = Id;
            i.CelebrationId = CelebrationId;
            i.Name = Name;
            i.Price = Price;
            i.Describe = Describe;
            i.Amount = Amount;
            i.CustomerId = CustomerId;
            i.ToBeTaken = ToBeTaken;
            i.ToEveryone = ToEveryone;
            return i;
        }
        public static List<itemtoeventDTO> CreateDTOList(List<itemtoevent> list)
        {
            List<itemtoeventDTO> DTOList = new List<itemtoeventDTO>();
            return list.Select(i => new itemtoeventDTO(i)).ToList();
        }
    }
}
