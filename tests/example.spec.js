// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('pruebita', async ({ page }) => {

  await page.goto('https://www.mercadolibre.com.pe'); //entramos a la pagina
  await page.locator('input[id=\'cb1-edit\']').fill('iphone') //fill para llenar el campo que seleccionamos
  await page.keyboard.press('Enter') //keyboard.press para decir que estamos presionando el boton enter
});



test('Crear_Empleado_Desafio', async ({ page }) => {
  // Iniciar sesión en OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.type('#username', 'Admin');
  await page.type('#password', 'admin123');
  await page.click('button[type="submit"]');

  // Acceder al menú de PIM
  await page.click('#pim_menu_button');

  // Hacer clic en "Agregar Empleado"
  await page.click('#addEmpLink');

  // Ingresar datos del empleado
  await page.type('#firstName', 'Alejandro');
  await page.type('#lastName', 'Rojas');
  await page.type('#employeeId', 'EMP007');

  // Guardar el nuevo empleado
  await page.click('#btnSave');

  // Validar que el empleado fue creado
  const successMessage = await page.textContent('#success_message');
  expect(successMessage).toContain('Successfully saved');

  // Verificar que el empleado aparece en la lista
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  const employeeName = await page.textContent('.employee-name-text');
  expect(employeeName).toContain('Alejandro Rojas');
});
