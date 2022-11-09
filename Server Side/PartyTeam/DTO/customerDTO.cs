using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class customerDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int Status { get; set; }
        public bool Approve { get; set; }
        public string Image { get; set; }

        public customerDTO()
        {

        }
        public customerDTO(customer cu)
        {
            Id = cu.Id;
            Name = cu.Name;
            Password = cu.Password;
            Phone = cu.Phone;
            Email = cu.Email;
            Status = (int)cu.Status;
            Approve = (bool)cu.Approve;
            Image = cu.Image;
        }
        public customer FromDTOToTable()
        {
            customer cu = new customer();
            cu.Id = Id;
            cu.Name = Name;
            cu.Password = Password;
            cu.Phone = Phone;
            cu.Email = Email;
            cu.Status = Status;
            cu.Approve = Approve;
            Image = cu.Image;
            return cu;
        }
        public static List<customerDTO> CreateDTOList(List<customer> list)
        {
            List<customerDTO> DTOList = new List<customerDTO>();
            return list.Select(cu => new customerDTO(cu)).ToList();
        }
    }
}
