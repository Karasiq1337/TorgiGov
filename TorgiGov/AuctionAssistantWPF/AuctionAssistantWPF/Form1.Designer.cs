namespace AuctionAssistantWPF
{
    partial class MainMenu
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            components = new System.ComponentModel.Container();
            label1 = new System.Windows.Forms.Label();
            button1 = new System.Windows.Forms.Button();
            button2 = new System.Windows.Forms.Button();
            button3 = new System.Windows.Forms.Button();
            button4 = new System.Windows.Forms.Button();
            bindingSource1 = new System.Windows.Forms.BindingSource(components);
            radioButton1 = new System.Windows.Forms.RadioButton();
            radioButton2 = new System.Windows.Forms.RadioButton();
            ((System.ComponentModel.ISupportInitialize)bindingSource1).BeginInit();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new System.Drawing.Font("Castellar", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            label1.Location = new System.Drawing.Point(262, 62);
            label1.Name = "label1";
            label1.Size = new System.Drawing.Size(252, 25);
            label1.TabIndex = 0;
            label1.Text = "Auction Assistant";
            // 
            // button1
            // 
            button1.BackColor = System.Drawing.SystemColors.ActiveCaption;
            button1.FlatAppearance.BorderColor = System.Drawing.Color.Cyan;
            button1.Location = new System.Drawing.Point(52, 115);
            button1.Name = "button1";
            button1.Size = new System.Drawing.Size(166, 65);
            button1.TabIndex = 1;
            button1.Text = "Личный кабинет";
            button1.UseVisualStyleBackColor = false;
            button1.Click += button1_Click;
            // 
            // button2
            // 
            button2.BackColor = System.Drawing.SystemColors.ActiveCaption;
            button2.Location = new System.Drawing.Point(224, 115);
            button2.Name = "button2";
            button2.Size = new System.Drawing.Size(166, 65);
            button2.TabIndex = 2;
            button2.Text = "Список лотов";
            button2.UseVisualStyleBackColor = false;
            // 
            // button3
            // 
            button3.BackColor = System.Drawing.SystemColors.ActiveCaption;
            button3.Location = new System.Drawing.Point(396, 115);
            button3.Name = "button3";
            button3.Size = new System.Drawing.Size(166, 65);
            button3.TabIndex = 3;
            button3.Text = "Сравнить";
            button3.UseVisualStyleBackColor = false;
            // 
            // button4
            // 
            button4.BackColor = System.Drawing.SystemColors.ActiveCaption;
            button4.Location = new System.Drawing.Point(568, 115);
            button4.Name = "button4";
            button4.Size = new System.Drawing.Size(166, 65);
            button4.TabIndex = 4;
            button4.Text = "Статистика";
            button4.UseVisualStyleBackColor = false;
            // 
            // radioButton1
            // 
            radioButton1.AutoSize = true;
            radioButton1.Location = new System.Drawing.Point(483, 191);
            radioButton1.Name = "radioButton1";
            radioButton1.Size = new System.Drawing.Size(65, 19);
            radioButton1.TabIndex = 5;
            radioButton1.TabStop = true;
            radioButton1.Text = "Аренда";
            radioButton1.UseVisualStyleBackColor = true;
            // 
            // radioButton2
            // 
            radioButton2.AutoSize = true;
            radioButton2.Location = new System.Drawing.Point(483, 216);
            radioButton2.Name = "radioButton2";
            radioButton2.Size = new System.Drawing.Size(75, 19);
            radioButton2.TabIndex = 6;
            radioButton2.TabStop = true;
            radioButton2.Text = "Продажа";
            radioButton2.UseVisualStyleBackColor = true;
            // 
            // MainMenu
            // 
            AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            BackColor = System.Drawing.SystemColors.ActiveCaption;
            BackgroundImage = Properties.Resources.Галочка;
            ClientSize = new System.Drawing.Size(800, 450);
            Controls.Add(radioButton2);
            Controls.Add(radioButton1);
            Controls.Add(button4);
            Controls.Add(button3);
            Controls.Add(button2);
            Controls.Add(button1);
            Controls.Add(label1);
            Name = "MainMenu";
            Text = "MainMenu";
            Load += Form1_Load;
            ((System.ComponentModel.ISupportInitialize)bindingSource1).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.BindingSource bindingSource1;
        private System.Windows.Forms.RadioButton radioButton1;
        private System.Windows.Forms.RadioButton radioButton2;
    }
}