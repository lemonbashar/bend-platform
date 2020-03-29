package bend.library.config.actuate.config;

public class Feature {
    private Boolean enabled = true;
    private String usage;

    public Feature() {
    }

    public Feature(String startPoint, String endpoint) {
        this.usage = startPoint + endpoint + "?name=" + endpoint;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public String getUsage() {
        return usage;
    }

    public void setUsage(String usage) {
        this.usage = usage;
    }
}
