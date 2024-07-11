const { test, expect } = require('@playwright/test');

let page;

// Test que automatiza la creación de un nuevo empleado
test('Crear nuevo empleado en OrangeHRM', async ({ context }) => {
  // Iniciar sesión en OrangeHRM
  page = await context.newPage();
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
  // ... (completar el resto de los datos del empleado)

  // Guardar el nuevo empleado
  await page.click('#btnSave');

  // Validar que el empleado fue creado
  const successMessage = await page.textContent('#success_message');
  expect(successMessage).toContain('Successfully saved');

  // Verificar que el empleado aparece en la lista
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  const employeeName = await page.textContent('.employee-name-text');
  expect(employeeName).toContain('Juan Perez');
});
