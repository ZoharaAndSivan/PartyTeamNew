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
        public static List<customerofeventDTO> GetCustomers()
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
        public static List<customerofeventDTO> GetCustomersConfirmedArrival(int id)
        {
            List<customerofevent> list = CustomerOfEvent.Get();
            List<customerofevent> customerofevents = list.Where(c => c.CelebrationId == id && c.Status == true).ToList();
            List<customerofeventDTO> customerofeventDTOs = customerofeventDTO.CreateDTOList(customerofevents);
            return customerofeventDTOs;
        }
        public static List<customerofeventDTO> GetCustomersNotConfirmedArrival(int id)
        {
            List<customerofevent> list = CustomerOfEvent.Get();
            List<customerofevent> customerofevents = list.Where(c => c.CelebrationId == id && c.Status == false).ToList();
            List<customerofeventDTO> customerofeventDTOs = customerofeventDTO.CreateDTOList(customerofevents);
            return customerofeventDTOs;
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
        public static void ConfirmArrival (string email, bool answer)
        {
            CustomerOfEvent.ConfirmArrival(email, answer);
        }
        public static void Delete(int i)
        {
            CustomerOfEvent.Delete(i);
        }
    }
}
