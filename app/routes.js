const express = require('express');
const passport = require('passport');

const routes = express.Router();
const {
  CompanyController, EmployeeController, AuthController, SquadController,
} = require('./controllers');

routes.get('/', CompanyController.login);
routes.get('/empresa', CompanyController.dashboard);
routes.get('/empresa/entrar', CompanyController.login);
routes.get('/empresa/registrar', CompanyController.register);
routes.get('/empresa/squads', CompanyController.squads);
routes.post('/empresa/squads/registrar', SquadController.register);
routes.get('/empresa/squads/registrar', SquadController.renderRegister);
routes.get('/empresa/squads/:id', CompanyController.renderSquadsEdit);
routes.get('/empresa/funcionarios', CompanyController.renderEmployees);
routes.get('/empresa/funcionarios/registrar', CompanyController.renderEmployeesRegister);
routes.get('/empresa/funcionarios/:id', CompanyController.renderEmployeesEdit);
routes.get('/empresa/projetos', CompanyController.renderProjects);
routes.get('/empresa/projetos/registrar', CompanyController.renderProjectsRegister);
routes.get('/empresa/projetos/:id', CompanyController.renderProjectsEdit);

routes.get('/funcionario/entrar', EmployeeController.renderLogin);

routes.post('/empresa/registrar', AuthController.registerCompany);
routes.post('/empresa/entrar', passport.authenticate('local', {
  successRedirect: '/empresa',
  failureRedirect: '/',
  failureFlash: true,
}));

module.exports = routes;
