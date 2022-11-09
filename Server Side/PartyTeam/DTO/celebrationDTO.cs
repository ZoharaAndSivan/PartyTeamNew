using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class celebrationDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Nullable<int> PepoleAmount { get; set; }
        public System.DateTime DateCelebration { get; set; }
        public System.TimeSpan StartHour { get; set; }
        public Nullable<int> Lenght { get; set; }
        public string ImportantText { get; set; }
        public Nullable<bool> EncodedCelebration { get; set; }
        public Nullable<bool> InEditingCelebration { get; set; }
        public int CelebrationType { get; set; }
        public string Address { get; set; }

        public celebrationDTO()
        {

        }
        public celebrationDTO(celebration ce)
        {
            Id = ce.Id;
            Name = ce.Name;
            //PepoleAmount = (int)ce.PepoleAmount;
            DateCelebration = (DateTime)ce.DateCelebration;
            StartHour = (TimeSpan)ce.StartHour;
            //Lenght = (int)ce.Lenght;
            //ImportantText = ce.ImportantText;
            //EncodedCelebration = (bool)ce.EncodedCelebration;
            //InEditingCelebration = (bool)ce.InEditingCelebration;
            //CelebrationType = (int)ce.CelebrationType;
            //Address = ce.Address;
        }
        public celebration FromDTOToTable()
        {
            celebration ce = new celebration();
            ce.Id = Id;
            ce.Name = Name;
            ce.PepoleAmount = PepoleAmount;
            ce.DateCelebration = DateCelebration;
            ce.StartHour = StartHour;
            ce.Lenght = Lenght;
            ce.ImportantText = ImportantText;
            ce.EncodedCelebration = EncodedCelebration;
            ce.InEditingCelebration = InEditingCelebration;
            ce.CelebrationType = CelebrationType;
            ce.Address = Address;
            return ce;
        }
        public static List<celebrationDTO> CreateDTOList(List<celebration> list)
        {
            List<celebrationDTO> DTOList = new List<celebrationDTO>();
            return list.Select(ce => new celebrationDTO(ce)).ToList();
        }
    }
}
