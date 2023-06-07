# Load the Rails application.
require_relative "application"

React::ServerRendering::BundleRenderer.dont_use_webpacker_manifest = true

# Initialize the Rails application.
Rails.application.initialize!
