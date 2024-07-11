// @ts-check
const { test, expect } = require('@playwright/test');

test('Crear_Empleado_Desafio', async ({ page }) => {
  // Iniciar sesión en OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[placeholder=\'Username\']').fill('Admin')
  await page.locator('input[placeholder=\'Password\']').fill('admin123')
  await page.keyboard.press('Enter')

  // Seleccionar la lista de empleados
  await page.getByRole('link', { name: 'PIM' }).click();
  
  // Agregar nuevo empleado
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Alejandro Simon');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Middle Name').fill('Rojas');
  await page.getByPlaceholder('Middle Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Rojas');
  await page.locator('form').getByRole('textbox').nth(4).click();
  await page.locator('form').getByRole('textbox').nth(4).fill('72721');
  await page.getByRole('button', { name: 'Save' }).click();

  //Buscar el nuevo empleado creado
  await page.locator('li').filter({ hasText: 'Employee List' }).click();
  await page.getByPlaceholder('Type for hints...').first().click();
  await page.getByPlaceholder('Type for hints...').first().fill('Alejandro Simon');
  await page.getByText('Alejandro Simon Rojas Rojas').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('cell', { name: '' }).locator('i').click();
});
