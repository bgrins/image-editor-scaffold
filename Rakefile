require 'rubygems'

HEADER = /((^\s*\/\/.*\n)+)/  

FRAMEWORK_PATH = "framework/"
FRAMEWORK_OUTPUT = "framework.min.js"
FRAMEWORK_FILES = ['underscore','jquery-1.6.2','backbone']

APP_PATH = "app/"
APP_OUTPUT = "framework.min.js"
APP_FILES = ['underscore','jquery-1.6.2','backbone']


desc "rebuild the img files for distribution"
task :build do
  begin
    require 'closure-compiler'
  rescue LoadError
    puts "closure-compiler not found.\nInstall it by running 'gem install closure-compiler"
    exit
  end
  
  
  File.open('img-min.js', 'w+')
  
  FRAMEWORK_FILES.each do |f|
    filename = FRAMEWORK_PATH + f + ".js"
    source = File.read filename
    header = source.match(HEADER).to_a[1].to_s.squeeze(' ')
    
    File.open('img-min.js', 'a+') do |file|
      file.write header + Closure::Compiler.new.compress(source)
    end
  end
end
