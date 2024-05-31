using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;

namespace AuctionAssistantWPF
{
    public enum AuthState
    {
        Default,
        AlreadyRegistered,
        ShowPassword
    }
    public class StateMachine
    {
        public AuthState CurrentState { get; private set; }

        public StateMachine()
        {
            CurrentState = AuthState.Default;
        }
        public void ToggleAlreadyRegistered()
        {
            if (CurrentState == AuthState.Default)
                CurrentState = AuthState.AlreadyRegistered;
            else if (CurrentState == AuthState.AlreadyRegistered)
                CurrentState = AuthState.Default;
        }

        public void ToggleShowPassword()
        {
            if (CurrentState == AuthState.Default)
                CurrentState = AuthState.ShowPassword;
            else if (CurrentState == AuthState.ShowPassword)
                CurrentState = AuthState.Default;
        }
    }
}
