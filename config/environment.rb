# Load the Rails application.
require_relative "application"

Rails.application.configure do

    config.hosts << "starfit.store"

end
# Initialize the Rails application.
Rails.application.initialize!
