# React Page
React 필수 기능(Router, Redux) 및 UI 라이브러리를 테스트하기 위해 개발한 사이트이다. 백엔드를 ASP.NET Core로 같이 구축한 것이 특징이다.  

## ASP.NET Core 환경세팅  
Visual Studio에서 ASP.NET Core 기반으로 React를 연동하는 방법이다.  

### 1. Node.js 개발 워크시트 추가

npm을 통해 패키지를 다운받아야 하기 때문에 Node.js 설치가 필수적이다. 만약에 Node.js 설치가 안되어있다면 [Node.js 사이트](https://nodejs.org/en/download/) 에 접속하여 설치해야된다. 설치 후 Visual Studio에서 Node.js 개발 위크시트를 추가한다. (설치는 Visual Studio 설치 관리자에서 진행)  

<img src="/scan/워크시트.png"  width="800">  

### 2. ASP.NET Core Web API 프로젝트 생성

Visual Studio에서 새 프로젝트로 ASP.NET Core Web API을 생성한다.  React 템플릿을 활용하여 프로젝트 구상도 가능하지만 그 경우 백엔드와 프론트엔드를 별도로 가져가기에 서버 연결이 2번 필요하다. 그렇기에 Web API를 구축하고 wwwroot를 통해 클라이언트에서 react에서 개발한 페이지에 접속하도록 개발하는게 주 목적이다.  

<img src="/scan/API 프로젝트 생성.png"  width="800">  

### 3. wwwroot 폴더 생성

프로젝트 파일 마우스 우측클릭 → Add → New Folder → wwwroot 입력  
wwwroot 폴더는 Web API에서 정적요소를 담당하는 폴더이다. (html, js, css 등)  

### 4. React 프로젝트 생성  

터미널 창을 Deveper Command Prompt(개발자 명령 프롬프트)로 설정 →  파일 경로를 프로젝트 폴더로 변경  `cd 프로젝트 폴더`→ 
`npx create-react-app 프로젝트 명 --template redux-typescript` 입력  

<img src="/scan/React 프로젝트 생성1.png"  width="800">  

주의할 점은 npm에서는 대문자 프로젝트를 허용하지 않기에 만약 대문자를 포함했다면 위와같이 오류가 발생한다.  

<img src="/scan/React 프로젝트 생성2.png"  width="800">  

그렇기에 대문자를 제외하고 위와같이 작성하도록 한다. 만약에 설치 도중 “Cannot read property pickAlgorithgm” 에러가 발생한다면 npm cache clear --force 를 실행한다.  

<img src="/scan/프로젝트 구성.png"  width="300">  

### 5. program.cs 수정  

현재 상태로 디버깅을 하게 되면 swager를 첫 화면에서 호출하고 React 화면으로 이동하더라도 Hot Reload가 적용되지 않는다. 그 이유는 React 호출에 필요한 개발서버 세팅이 안되어있기 때문이다. 그렇기에 아래와 같이 program.cs 파일에서 환경세팅을 진행한다.  

```powershell
// program.cs

//React 개발서버 사용을 위해 추가 -> Nuget에서 Microsoft.AspNetCore.SpaServices.Extension 설치해야 사용 가능
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
    x.RootPath = "ClientApp/public";
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

//
app.UseRouting();

//app.UseHttpsRedirection();

app.UseAuthorization();

//
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
        x.Options.SourcePath = "ClientApp";
				//create-react-app 서버의 인스턴스로 전달하여 요청을 처리
        x.UseReactDevelopmentServer("start");
				//들어오는 요청을 SPA 개발서버로 전달하도록 구성
        x.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    });
}

app.Run();
```  

### 6. launchSetting 수정

1\) 프로젝트 파일 → properties → Debug →프로젝트 항목 → App URL에서 https 삭제  

2\) URL 공란으로 수정

<img src="/scan/launchSetting.png"  width="700">  

### 7. Build Path 수정

React 빌드 후 생성되는 파일 경로를 wwwroot로 지정하기 위해 아래와 같이 세팅을 진행한다.

**1) cmd에서 경로를 React 프로젝트 경로로 지정 후 cross-env를 설치한다.**

```powershell
npm i cross-env
```

**2) React 프로젝트에 있는 packsge.json 파일에서 scripts build를 아래와 같이 수정한다.**

```powershell
"build": "cross-env BUILD_PATH='../wwwroot' react-scripts build",
```
