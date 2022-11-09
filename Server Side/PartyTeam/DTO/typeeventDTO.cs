using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class typeeventDTO
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Describe { get; set; }
        public bool Status { get; set; }

        public typeeventDTO()
        {

        }
        public typeeventDTO(typeevent t)
        {
            Id = t.Id;
            Name = t.Name;
            Describe = t.Describe;
            Status = (bool)t.Status;
        }
        public typeevent FromDTOToTable()
        {
            typeevent t = new typeevent();
            t.Id = Id;
            t.Name = Name;
            t.Describe = Describe;
            t.Status = Status;
            return t;
        }
        public static List<typeeventDTO> CreateDTOList(List<typeevent> list)
        {
            List<typeeventDTO> DTOList = new List<typeeventDTO>();
            foreach (var t in list)
            {
                DTOList.Add(new typeeventDTO(t));
            }
            return DTOList;
        }
    }
}
