using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class customerofeventDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int CelebrationId { get; set; }
        public bool Status { get; set; }
        public customerofeventDTO()
        {

        }
        public customerofeventDTO(customerofevent coe)
        {
            Id = coe.Id;
            Name = coe.Name;
            Email = coe.Email;
            Phone = coe.Phone;
            CelebrationId = coe.CelebrationId;
            Status = (bool)coe.Status;
        }
        public customerofevent FromDTOToTable()
        {
            customerofevent coe = new customerofevent();
            coe.Id = Id;
            coe.Name = Name;
            coe.Email = Email;
            coe.Phone = Phone;
            coe.CelebrationId = CelebrationId;
            coe.Status = Status;
            return coe;
        }
        public static List<customerofeventDTO> CreateDTOList(List<customerofevent> list)
        {
            List<customerofeventDTO> DTOList = new List<customerofeventDTO>();
            return list.Select(coe => new customerofeventDTO(coe)).ToList();
            //foreach (var coe in list)
            //{
            //    DTOList.Add(new customerofeventDTO(coe));
            //}
            //return DTOList;
        }
    }
}
