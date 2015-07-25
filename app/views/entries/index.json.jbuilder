json.array!(@entries) do |entry|
  json.extract! entry, :id, :name, :content
  json.url entry_url(entry, format: :json)
end
