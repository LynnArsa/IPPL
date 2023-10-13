import unittest
from unittest.mock import patch
from tugas import operasi_matematika

class unitTestOperasiMatematika(unittest.TestCase):
    #Sum
    @patch('builtins.input', side_effect = ['1', '8', '2'])
    def test_penjumlahan(self, input):
        result = operasi_matematika()
        self.assertEqual(result, 10)
        
    #Substract
    @patch('builtins.input', side_effect = ['2', '6', '2'])
    def test_pengurangan(self, input):
        result = operasi_matematika()
        self.assertEqual(result, 4)

    #Multiply
    @patch('builtins.input', side_effect=['3', '3', '6'])
    def test_perkalian(self, input):
        result = operasi_matematika()
        self.assertEqual(result, 18)


    #Distribution
    @patch('builtins.input', side_effect = ['4', '15', '3'])
    def test_pembagian(self, input):
        result = operasi_matematika()
        self.assertEqual(result, 5)
        
if __name__ == '__main__':
    unittest.main()