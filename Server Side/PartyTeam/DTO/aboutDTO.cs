using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class aboutDTO
    {
        public int Id { get; set; }
        public string Information { get; set; }

        public aboutDTO()
        {

        }
        public aboutDTO(about a)
        {
            Id = a.Id;
            Information = a.Information;
        }
        public about FromDTOToTable()
        {
            about a = new about();
            a.Id = Id;
            a.Information = Information;
            return a;
        }
        public static List<aboutDTO> CreateDTOList(List<about> list)
        {
            List<aboutDTO> DTOList = new List<aboutDTO>();
            return list.Select(a => new aboutDTO(a)).ToList();
        }
    }
}
