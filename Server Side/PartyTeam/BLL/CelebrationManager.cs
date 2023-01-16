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
    public class CelebrationManager
    {
        public static List<celebrationDTO> GetCelebration()
        {
            List<celebration> list = Celebration.Get();
            return celebrationDTO.CreateDTOList(list);
        }
        public static List<celebrationDTO> GetCelebrationById(int id)
        {
            List<celebration> list = Celebration.Get();
            List<celebration> celebrations = list.Where(c => c.Id == id).ToList();
            List<celebrationDTO> celebrationDTOs = celebrationDTO.CreateDTOList(celebrations);
            return celebrationDTOs;
        }
        public static List<celebrationDTO> GetCelebrationNotApproval()
        {
            List<celebration> list = Celebration.Get();
            List<celebration> celebrations = list.Where(c => c.EncodedCelebration == false).ToList();
            List<celebrationDTO> celebrationDTOs = celebrationDTO.CreateDTOList(celebrations);
            return celebrationDTOs;
        }
        public static List<celebrationDTO> GetMyCelebrationByUserId(int id)
        {
            List<celebration> list = Celebration.GetMyCelebrationByUserId(id);
            List < celebrationDTO > myCelebrationDTOs = celebrationDTO.CreateDTOList(list);
            return myCelebrationDTOs;
        }
        public static List<celebrationDTO> GetOrderCelebrationByUserEmail(string email)
        {
            List<celebration> list = Celebration.GetOrderCelebrationByUserEmail(email);
            List<celebrationDTO> myOrderCelebrationDTOs = celebrationDTO.CreateDTOList(list);
            return myOrderCelebrationDTOs;
        }
        public static int PostCelebration(celebration c)
        {
            return Celebration.Post(c);            
        }
        public static void PutCelebration(celebration c)
        {
            Celebration.Put(c);
        }
        public static celebration ChangeEventStatus(int id, bool answer)
        {
            return Celebration.ChangeEventStatus(id, answer);
        }
        public static void Delete(int i)
        {
            Celebration.Delete(i);
        }
    }
}