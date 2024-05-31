using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Forms;
using System.Windows.Forms.Integration;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace AuctionAssistantWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private StateMachine statemachine;
        public MainWindow()
        {
            InitializeComponent();

            TGB.Checked += TGB_Checked;
            statemachine = new StateMachine();
        }

        private void MinCross_MouseDown(object sender, MouseButtonEventArgs e)
        {
            this.Close();
        }

        private void MinCollapse_MouseDown(object sender, MouseButtonEventArgs e)
        {
            this.WindowState = WindowState.Minimized;
        }

        private void ToolBar_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if(e.ChangedButton == MouseButton.Left)
            {
                this.DragMove();
            }
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            MainMenu FormMainMenu = new MainMenu();
            FormMainMenu.ShowDialog();
            Window parentWindow = GetWindow(this);
            parentWindow.Close();
        }

        private void TGB_Checked(object sender, RoutedEventArgs e)
        {

            Autorisation.Content = "Авторизоваться";
            PassAproveTextBox.Visibility = Visibility.Collapsed;
            Watermark2.Visibility = Visibility.Collapsed;

            //statemachine.ToggleAlreadyRegistered();

            //if (statemachine.CurrentState == AuthState.Default)
            //{
            //    PassAproveTextBox.Visibility = Visibility.Visible;
            //    Autorisation.Content = "Регистрация";
            //}
            //else if (statemachine.CurrentState == AuthState.AlreadyRegistered)
            //{
            //    PassAproveTextBox.Visibility = Visibility.Collapsed;
            //    Autorisation.Content = "Авторизоваться";
            //}

        }
        private void TGB_UnChecked(object sender, RoutedEventArgs e)
        {

            Autorisation.Content = "Регистрация";
            PassAproveTextBox.Visibility = Visibility.Visible;
            Watermark2.Visibility = Visibility.Visible;

        }
        private void PasswordBox_PasswordChanged(object sender, RoutedEventArgs e)
        {
            if (PassTextBox.Password.Length > 0)
            {
                Watermark.Visibility = Visibility.Collapsed;
                Watermark2.Visibility = Visibility.Collapsed;
            }
        }
        private void BtnShowPassword_Checked(object sender, RoutedEventArgs e)
        {
            //Отобразить текст в поле пароля
            Watermark.Text = PassTextBox.Password;
            Watermark.Visibility = Visibility.Visible;

            
            Watermark2.Visibility = Visibility.Visible;
            Watermark2.Text = PassAproveTextBox.Password;

            //statemachine.ToggleShowPassword();

            //if (statemachine.CurrentState == AuthState.Default)
            //{
            //    PassTextBox.Visibility = Visibility.Visible;
            //    Watermark.Visibility = Visibility.Collapsed;
            //}
            //else if (statemachine.CurrentState == AuthState.ShowPassword)
            //{
            //    PassTextBox.Visibility = Visibility.Collapsed;
            //    Watermark.Visibility = Visibility.Visible;
            //    Watermark.Text = PassTextBox.Password;
            //}
        }

        private void BtnShowPassword_Unchecked(object sender, RoutedEventArgs e)
        {
            //Скрыть текст пароля и отобразить поле для ввода
            Watermark.Visibility = Visibility.Collapsed;
            Watermark2.Visibility = Visibility.Collapsed;
        }
    }
}
