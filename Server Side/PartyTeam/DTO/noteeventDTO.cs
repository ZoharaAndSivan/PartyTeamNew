using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class noteeventDTO
    {

        public int Id { get; set; }
        public int CelebrationId { get; set; }
        public bool ToShow { get; set; }
        public string Note { get; set; }

        public virtual celebration celebration { get; set; }
        public noteeventDTO()
        {

        }
        public noteeventDTO(noteevent n)
        {
            Id = n.Id;
            CelebrationId = (int)n.CelebrationId;
            ToShow = (bool)n.ToShow;
            Note = n.Note;

        }
        public noteevent FromDTOToTable()
        {
            noteevent n = new noteevent();
            n.Id = Id;
            n.CelebrationId = CelebrationId;
            n.ToShow = ToShow;
            n.Note = Note;
            return n;
        }
        public static List<noteeventDTO> CreateDTOList(List<noteevent> list)
        {
            List<noteeventDTO> DTOList = new List<noteeventDTO>();
            return list.Select(n => new noteeventDTO(n)).ToList();
        }
    }
}
