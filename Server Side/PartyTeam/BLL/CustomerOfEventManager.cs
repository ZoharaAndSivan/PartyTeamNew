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
    public class CustomerOfEventManager
    {
        public static  List<customerofeventDTO> GetCustomers()
        {
            List<customerofevent> list = CustomerOfEvent.Get();
            return customerofeventDTO.CreateDTOList(list);
        }
        public static List<customerofeventDTO> GetCustomerOfEventById(int id)
        {
            List<customerofevent> list = CustomerOfEvent.Get();
            List<customerofevent> customerofevents = list.Where(c => c.CelebrationId == id).ToList();
            List<customerofeventDTO> customerofeventDTOs = customerofeventDTO.CreateDTOList(customerofevents);
            return customerofeventDTOs;
        }
        public static customer GetManagerOfEvent(int id)
        {
            List<customerofevent> list = CustomerOfEvent.Get();
            customerofevent managerId = list.FirstOrDefault(c => c.Status == false && c.CelebrationId == id);
            List<customer> customers = Customer.Get();
            customer Manager = customers.FirstOrDefault(c => c.Id == managerId.CustomerId);
            return Manager;
        }

        public static customerofeventDTO PostCustomerOfEvent(customerofevent c)
        {
            customerofevent newC = CustomerOfEvent.Post(c);
            return new customerofeventDTO(newC);
        }
        public static void PutCOE(customerofevent coe)
        {
            CustomerOfEvent.Put(coe);
        }
        public static void Delete(int i)
        {
            CustomerOfEvent.Delete(i);
        }
    }
}
