//React 개발서버 사용을 위해 추가
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//정적파일을 제공할 수 있는 서비스 등록 (RootPath에는 React 폴더명/public으로 기재)
builder.Services.AddSpaStaticFiles(x =>
{
    x.RootPath = "client_app/public";
});

var app = builder.Build();

//현재 요청 경로에 정적파일 처리를 사용하도록 설정
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    // 정적 서비스 호출
    app.UseSpaStaticFiles();
}

app.UseRouting();

//app.UseHttpsRedirection();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

//SPA를 호스팅하기 위해 환경세팅
if (app.Environment.IsDevelopment())
{
    app.UseSpaStaticFiles();
    app.UseSpa(x =>
    {
        x.Options.SourcePath = "client_app";
        //create-react-app 서버의 인스턴스로 전달하여 요청을 처리
        x.UseReactDevelopmentServer("start");
        //들어오는 요청을 SPA 개발서버로 전달하도록 구성
        x.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    });
}

app.Run();
