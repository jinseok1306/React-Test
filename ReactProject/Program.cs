//React ���߼��� ����� ���� �߰�
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//���������� ������ �� �ִ� ���� ��� (RootPath���� React ������/public���� ����)
builder.Services.AddSpaStaticFiles(x =>
{
    x.RootPath = "client_app/public";
});

var app = builder.Build();

//���� ��û ��ο� �������� ó���� ����ϵ��� ����
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    // ���� ���� ȣ��
    app.UseSpaStaticFiles();
}

app.UseRouting();

//app.UseHttpsRedirection();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

//SPA�� ȣ�����ϱ� ���� ȯ�漼��
if (app.Environment.IsDevelopment())
{
    app.UseSpaStaticFiles();
    app.UseSpa(x =>
    {
        x.Options.SourcePath = "client_app";
        //create-react-app ������ �ν��Ͻ��� �����Ͽ� ��û�� ó��
        x.UseReactDevelopmentServer("start");
        //������ ��û�� SPA ���߼����� �����ϵ��� ����
        x.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    });
}

app.Run();
