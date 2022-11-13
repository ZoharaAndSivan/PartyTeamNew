using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class categoryDTO
    {
        public int Id { get; set; }
        public int TypeId { get; set; }
        public string Name { get; set; }
        public List<typeeventDTO> typeEvents { get; set; }

        public virtual typeevent typeevent { get; set; }

        public categoryDTO()
        {

        }
        public categoryDTO(category ca)
        {
            Id = ca.Id;
            TypeId = (int)ca.TypeId;
            Name = ca.Name;
            typeEvents = typeeventDTO.CreateDTOList(ca.typeevent.ToList());
        }
        public category FromDTOToTable()
        {
            category ca = new category();
            ca.Id = Id;
            ca.TypeId = TypeId;
            ca.Name = Name;
            return ca;
        }
        public static List<categoryDTO> CreateDTOList(List<category> list)
        {
            List<categoryDTO> DTOList = new List<categoryDTO>();
            return list.Select(ca => new categoryDTO(ca)).ToList();
        }
    }
}
