using DAL;
using DAL.Actions;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class CustomerManager
    {
        public static List<customerDTO> GetCustomer()
        {
            List<customer> list = Customer.Get();
            return customerDTO.CreateDTOList(list);
        }

        public static List<customerDTO> GetCustomerById(int id)
        {
            List<customer> list = Customer.Get();
            List<customer> customers = list.Where(c => c.Id == id).ToList();
            List<customerDTO> customerDTOs = customerDTO.CreateDTOList(customers);
            return customerDTOs;
        }


        public static customerDTO LoginUser(string email, string password)
        {
            List<customer> list = Customer.Get();
            customer user = list.FirstOrDefault(c => c.Email.Contains(email) && c.Password.Contains(password));
            return user == null ? null : new customerDTO(user);
        }
        public static customerDTO PostCustomer(customer c)
        {
            customer newC = Customer.Post(c);
            return new customerDTO(newC);
        }
        public static void PutCustomer(customer c)
        {
            Customer.Put(c);
        }
        public static void Delete(int i)
        {
            Customer.Delete(i);
        }
    }
}