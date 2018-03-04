source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails'
gem 'pg'
gem 'puma'
gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
gem 'turbolinks'
gem 'redis'
gem 'devise'
gem 'excon'

group :development, :test do
  gem 'spirit_hands', github: 'steakknife/spirit_hands'
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'rspec'
end

group :development do
  gem 'binding_of_caller'
  gem 'better_errors'
  gem 'web-console'
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
end
